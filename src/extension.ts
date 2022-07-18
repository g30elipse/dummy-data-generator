import * as vscode from 'vscode';
import { generateData } from './api';
import { MENU_ITEMS } from './config';

const logger = vscode.window.createOutputChannel("data-generator");

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "data-generator" is now active!');

	let disposable = vscode.commands.registerCommand('data-generator.generate', () => {
		vscode.window.showQuickPick(MENU_ITEMS.map(m => m.label), {
			placeHolder: 'Select a resource type'
		}).then(type => {
			vscode.window.showInputBox({title: 'Enter the quantity. Default = 1'}).then(size => {
				if(!vscode || !vscode.window || !type) return;
				const value = MENU_ITEMS.find(m => m.label === type);
				if(!value) return;
				vscode.window.activeTextEditor?.edit(async editBuilder => {
					if(!vscode.window.activeTextEditor  || !value) return;
					let _size = 1;
					try {
						_size = size ? Number(size) : 1;
					} catch (error) {
						vscode.window.showErrorMessage('Invalid size. Using the default value of 1');
					}
					const res = await generateData(value.value, _size);
					// logger.appendLine(res);
					if(!res) return;
					vscode.env.clipboard.writeText(res).then(() => vscode.window.showInformationMessage(`Generated ${_size} ${value.label}. Copied to clipboard`));
					editBuilder.insert(vscode.window.activeTextEditor.selection.start, res);
				})
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
