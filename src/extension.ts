import * as vscode from 'vscode';
import * as fs from 'fs';

let sourceContent: string | undefined;
let statusBarButton: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    // Command to select the source file
    let selectSourceFileCommand = vscode.commands.registerCommand('extension.selectSourceFile', async () => {
        const sourceFileUri = await vscode.window.showOpenDialog({
            canSelectMany: false,
            openLabel: 'Select Source File'
        });

        if (!sourceFileUri) {
            return;
        }

        const sourceFilePath = sourceFileUri[0].fsPath;
        sourceContent = fs.readFileSync(sourceFilePath, 'utf-8');
        vscode.window.showInformationMessage('Source file loaded. Start typing anything.');
    });

    // Command to stop mirroring
    let stopMirroringCommand = vscode.commands.registerCommand('extension.stopMirroring', () => {
        sourceContent = undefined;
        vscode.window.showInformationMessage('Code mirroring has stopped.');
        statusBarButton.text = '$(stop) Code Mirror: Stopped';
        statusBarButton.tooltip = 'Click to start mirroring again';
        statusBarButton.command = 'extension.selectSourceFile'; // Reuse the select command to start mirroring again
    });

    context.subscriptions.push(selectSourceFileCommand);
    context.subscriptions.push(stopMirroringCommand);

    // Create a status bar item for the stop button
    statusBarButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarButton.text = '$(play) Code Mirror: Start';
    statusBarButton.tooltip = 'Click to select source file';
    statusBarButton.command = 'extension.selectSourceFile';
    statusBarButton.show();
    context.subscriptions.push(statusBarButton);

    vscode.workspace.onDidChangeTextDocument((event) => {
        if (sourceContent) {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document === event.document) {
                const docText = editor.document.getText();
                let newText = sourceContent.slice(0, docText.length);

                if (docText !== newText) {
                    const edit = new vscode.WorkspaceEdit();
                    edit.replace(editor.document.uri, new vscode.Range(0, 0, editor.document.lineCount, 0), newText);
                    vscode.workspace.applyEdit(edit);
                }
            }
        }
    });
}

export function deactivate() {}
