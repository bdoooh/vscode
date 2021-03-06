/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as assert from 'assert';
import { createKeybinding, KeyCode, KeyMod, KeyChord } from 'vs/base/common/keyCodes';
import { IHTMLContentElement } from 'vs/base/common/htmlContent';
import { USLayoutResolvedKeybinding } from 'vs/platform/keybinding/common/abstractKeybindingService';
import { OperatingSystem } from 'vs/base/common/platform';

suite('KeybindingLabels', () => {

	function assertUSLabel(OS: OperatingSystem, keybinding: number, expected: string): void {
		const usResolvedKeybinding = new USLayoutResolvedKeybinding(createKeybinding(keybinding), OS);
		assert.equal(usResolvedKeybinding.getLabel(), expected);
	}

	test('Windows US label', () => {
		// no modifier
		assertUSLabel(OperatingSystem.Windows, KeyCode.KEY_A, 'A');

		// one modifier
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyCode.KEY_A, 'Ctrl+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Shift | KeyCode.KEY_A, 'Shift+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Alt | KeyCode.KEY_A, 'Alt+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.WinCtrl | KeyCode.KEY_A, 'Windows+A');

		// two modifiers
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KEY_A, 'Ctrl+Shift+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Alt | KeyCode.KEY_A, 'Ctrl+Alt+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Windows+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, 'Shift+Alt+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, 'Shift+Windows+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Alt+Windows+A');

		// three modifiers
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, 'Ctrl+Shift+Alt+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Windows+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Alt+Windows+A');
		assertUSLabel(OperatingSystem.Windows, KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Shift+Alt+Windows+A');

		// four modifiers
		assertUSLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Alt+Windows+A');

		// chord
		assertUSLabel(OperatingSystem.Windows, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), 'Ctrl+A Ctrl+B');
	});

	test('Linux US label', () => {
		// no modifier
		assertUSLabel(OperatingSystem.Linux, KeyCode.KEY_A, 'A');

		// one modifier
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyCode.KEY_A, 'Ctrl+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Shift | KeyCode.KEY_A, 'Shift+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Alt | KeyCode.KEY_A, 'Alt+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.WinCtrl | KeyCode.KEY_A, 'Windows+A');

		// two modifiers
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KEY_A, 'Ctrl+Shift+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Alt | KeyCode.KEY_A, 'Ctrl+Alt+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Windows+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, 'Shift+Alt+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, 'Shift+Windows+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Alt+Windows+A');

		// three modifiers
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, 'Ctrl+Shift+Alt+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Windows+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Alt+Windows+A');
		assertUSLabel(OperatingSystem.Linux, KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Shift+Alt+Windows+A');

		// four modifiers
		assertUSLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Alt+Windows+A');

		// chord
		assertUSLabel(OperatingSystem.Linux, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), 'Ctrl+A Ctrl+B');
	});

	test('Mac US label', () => {
		// no modifier
		assertUSLabel(OperatingSystem.Macintosh, KeyCode.KEY_A, 'A');

		// one modifier
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyCode.KEY_A, '⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Shift | KeyCode.KEY_A, '⇧A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Alt | KeyCode.KEY_A, '⌥A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.WinCtrl | KeyCode.KEY_A, '⌃A');

		// two modifiers
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KEY_A, '⇧⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Alt | KeyCode.KEY_A, '⌥⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, '⇧⌥A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⇧A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⌥A');

		// three modifiers
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyCode.KEY_A, '⇧⌥⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⇧⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⌥⌘A');
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⇧⌥A');

		// four modifiers
		assertUSLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, '⌃⇧⌥⌘A');

		// chord
		assertUSLabel(OperatingSystem.Macintosh, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), '⌘A ⌘B');

		// special keys
		assertUSLabel(OperatingSystem.Macintosh, KeyCode.LeftArrow, '←');
		assertUSLabel(OperatingSystem.Macintosh, KeyCode.UpArrow, '↑');
		assertUSLabel(OperatingSystem.Macintosh, KeyCode.RightArrow, '→');
		assertUSLabel(OperatingSystem.Macintosh, KeyCode.DownArrow, '↓');
	});

	test('Aria label', () => {
		function assertAriaLabel(OS: OperatingSystem, keybinding: number, expected: string): void {
			const usResolvedKeybinding = new USLayoutResolvedKeybinding(createKeybinding(keybinding), OS);
			assert.equal(usResolvedKeybinding.getAriaLabel(), expected);
		}

		assertAriaLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Control+Shift+Alt+Windows+A');
		assertAriaLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Control+Shift+Alt+Windows+A');
		assertAriaLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Control+Shift+Alt+Command+A');
	});

	test('Electron Accelerator label', () => {
		function assertElectronAcceleratorLabel(OS: OperatingSystem, keybinding: number, expected: string): void {
			const usResolvedKeybinding = new USLayoutResolvedKeybinding(createKeybinding(keybinding), OS);
			assert.equal(usResolvedKeybinding.getElectronAccelerator(), expected);
		}

		assertElectronAcceleratorLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Alt+Super+A');
		assertElectronAcceleratorLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Alt+Super+A');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'Ctrl+Shift+Alt+Cmd+A');

		// electron cannot handle chords
		assertElectronAcceleratorLabel(OperatingSystem.Windows, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), null);
		assertElectronAcceleratorLabel(OperatingSystem.Linux, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), null);
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), null);

		// electron cannot handle numpad keys
		assertElectronAcceleratorLabel(OperatingSystem.Windows, KeyCode.NUMPAD_1, null);
		assertElectronAcceleratorLabel(OperatingSystem.Linux, KeyCode.NUMPAD_1, null);
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyCode.NUMPAD_1, null);

		// special
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyCode.LeftArrow, 'Left');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyCode.UpArrow, 'Up');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyCode.RightArrow, 'Right');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyCode.DownArrow, 'Down');
	});

	test('User Settings label', () => {
		function assertElectronAcceleratorLabel(OS: OperatingSystem, keybinding: number, expected: string): void {
			const usResolvedKeybinding = new USLayoutResolvedKeybinding(createKeybinding(keybinding), OS);
			assert.equal(usResolvedKeybinding.getUserSettingsLabel(), expected);
		}

		assertElectronAcceleratorLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'ctrl+shift+alt+win+a');
		assertElectronAcceleratorLabel(OperatingSystem.Linux, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'ctrl+shift+alt+meta+a');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, 'ctrl+shift+alt+cmd+a');

		// electron cannot handle chords
		assertElectronAcceleratorLabel(OperatingSystem.Windows, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), 'ctrl+a ctrl+b');
		assertElectronAcceleratorLabel(OperatingSystem.Linux, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), 'ctrl+a ctrl+b');
		assertElectronAcceleratorLabel(OperatingSystem.Macintosh, KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_A, KeyMod.CtrlCmd | KeyCode.KEY_B), 'cmd+a cmd+b');
	});

	test('US HTML label', () => {
		function assertHTMLLabel(OS: OperatingSystem, keybinding: number, expected: IHTMLContentElement[]): void {
			const usResolvedKeybinding = new USLayoutResolvedKeybinding(createKeybinding(keybinding), OS);
			assert.deepEqual(usResolvedKeybinding.getHTMLLabel(), expected);
		}

		assertHTMLLabel(OperatingSystem.Windows, KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, [{
			tagName: 'span',
			className: 'monaco-kb',
			children: [
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Ctrl' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Shift' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Alt' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Windows' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'A' },
			]
		}]);

		assertHTMLLabel(OperatingSystem.Windows, KeyChord(KeyMod.CtrlCmd | KeyMod.Shift | KeyMod.Alt | KeyMod.WinCtrl | KeyCode.KEY_A, KeyCode.KEY_B), [{
			tagName: 'span',
			className: 'monaco-kb',
			children: [
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Ctrl' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Shift' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Alt' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'Windows' },
				{ tagName: 'span', text: '+' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'A' },
				{ tagName: 'span', text: ' ' },
				{ tagName: 'span', className: 'monaco-kbkey', text: 'B' },
			]
		}]);
	});

});
