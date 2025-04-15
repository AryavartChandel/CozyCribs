
#include <iostream>
#include <sstream>
#include <string>
#include <cctype>
#include <vector>
using namespace std;

// Inline helper function to check if a character is a valid identifier
inline bool isValidIdChar(char c) {
    return isalpha(c) || isdigit(c) || c == '_';
}

// Structure to hold variable mapping (symbol table)
struct Symbol {
    string name;
    int offset; // Offset in stack frame (simplified)
    Symbol(const string& n, int o) : name(n), offset(o) {}
};

class CodeGenerator {
private:
    vector<Symbol> symbolTable; // Correctly declare as std::vector
    stringstream assembly; // Reusable string builder
    int stackOffset;

    // Add variable to symbol table if not present
    void addSymbol(const string& var) {
        for (const auto& sym : symbolTable) {
            if (sym.name == var) return; // Already exists
        }
        symbolTable.emplace_back(var, stackOffset -= 4); // Assume 4 bytes per variable
    }

    // Generate assembly for a binary operation
    void genBinaryOp(const string& op, const string& dest, const string& src1, const string& src2) {
        addSymbol(dest);
        addSymbol(src1);
        addSymbol(src2);

        assembly << "    mov eax, [ebp" << symbolTable[symbolTable.size() - 2].offset << "] ; Load " << src1 << "\n";
        assembly << "    " << (op == "+" ? "add" : "sub") << " eax, [ebp" << symbolTable[symbolTable.size() - 1].offset << "] ; " << op << " " << src2 << "\n";
        assembly << "    mov [ebp" << symbolTable[symbolTable.size() - 3].offset << "], eax ; Store result in " << dest << "\n";
    }

public:
    CodeGenerator() : stackOffset(0) {}

    // Generate assembly code for a simple statement (e.g., a = b + c)
    void generate(const string& statement) {
        stringstream ss(statement);
        string dest, eq, remainder;

        // Parse the statement (e.g., "a = b + c")
        if (!(ss >> dest >> eq) || eq != "=") {
            cout << "Error: Invalid statement format. Use 'a = b + c' or 'a = b - c'\n";
            return;
        }
        // Read the rest of the line as the expression
        getline(ss >> ws, remainder);
        string expr = remainder.substr(remainder.find_first_not_of(" ")); // Remove leading spaces

        // Parse the expression (e.g., "b + c")
        string src1, op, src2;
        size_t opPos = expr.find_first_of("+-");
        if (opPos == string::npos) {
            cout << "Error: No operator found in expression\n";
            return;
        }
        src1 = expr.substr(0, opPos);
        op = expr[opPos];
        src2 = expr.substr(opPos + 1);

        // Trim whitespace from src1 and src2
        src1.erase(0, src1.find_first_not_of(" "));
        src1.erase(src1.find_last_not_of(" ") + 1);
        src2.erase(0, src2.find_first_not_of(" "));
        src2.erase(src2.find_last_not_of(" ") + 1);

        if (op != "+" && op != "-") {
            cout << "Error: Unsupported operator. Use '+' or '-'\n";
            return;
        }

        // Generate prologue
        assembly << "section .data\n";
        for (const auto& sym : symbolTable) {
            assembly << "    " << sym.name << " dd 0\n"; // Reserve space
        }
        assembly << "section .text\n";
        assembly << "global _start\n";
        assembly << "_start:\n";
        assembly << "    mov ebp, esp\n";

        // Generate operation
        genBinaryOp(op, dest, src1, src2);

        // Generate epilogue
        assembly << "    mov eax, 1\n"; // System call number for exit
        assembly << "    mov ebx, 0\n"; // Return code 0
        assembly << "    int 0x80\n";   // Make system call

        // Output the generated assembly
        cout << assembly.str();
        assembly.str(""); // Clear the stringstrea
}m for reuse
    }

    ~CodeGenerator() {
        symbolTable.clear(); // Ensure vector is cleared
        assembly.str("");    // Clear stringstream
    }
};

int main() {
    string statement;
    cout << "Enter a simple statement (e.g., a = b + c or a = b - c): ";
    getline(cin, statement); // Use getline to handle spaces

    CodeGenerator gen;
    gen.generate(statement);

    return 0;