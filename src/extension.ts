// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copyname" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copyname.copy', (e) => {
	  const name = e ? e?.fsPath?.split('/').pop() : vscode.window.activeTextEditor?.document.fileName.split('/').pop();
		const proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(name);
		proc.stdin.end();
		vscode.window.showInformationMessage(`copied '${name}' to the clipboard `);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
