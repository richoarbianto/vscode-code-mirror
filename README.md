# Code Mirror
<center><img src="logo.png" width=200px></img></center>

Code Mirror is a VS Code extension that mirrors content from a source file to your target file while you type. It's ideal for creating coding videos and reels where you want to replicate code dynamically.

## Features

- **Select Source File**: Choose a file from which content will be mirrored to the active editor.
- **Start Mirroring**: Begin mirroring content from the selected source file as you type.
- **Stop Mirroring**: Stop mirroring content and reset the extension's state. The status bar button allows you to quickly restart mirroring if needed.
- **Status Bar Integration**: Easily start and stop mirroring using a status bar item with clear indicators and tooltips.

## Commands

- **Code Mirror: Select Source File**  
  Opens a dialog to select the source file for mirroring. The content of the source file will be loaded and displayed in the status bar to inform you that mirroring has started.

- **Code Mirror: Stop Mirroring**  
  Stops the mirroring process and updates the status bar to indicate that mirroring has stopped. Click the status bar button to start mirroring again.

## How It Works

1. **Select Source File**: Use the command to pick the source file. The content of this file will be loaded and ready to mirror.
2. **Mirroring Content**: As you type in the target file, the content from the source file will be mirrored in real-time, adjusting the target file's content to match the source.
3. **Stop Mirroring**: If you want to stop mirroring, use the stop command or click the status bar button. You can restart mirroring at any time by selecting a new source file.

## Usage

- Click on the status bar item to select the source file and start mirroring.
- Use the command palette (Ctrl+Shift+P) to access the commands for selecting the source file or stopping mirroring.

## Installation

1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `Code Mirror`.
4. Click on `Install`.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request on [GitHub](https://github.com/richoarbianto/vscode-code-mirror).

## License

This extension is licensed under the MIT License.
