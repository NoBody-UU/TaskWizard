<h1 align=center>
  <br>
  TASKWIZARD
</h1>

<p align=center>
   A versatile package containing useful code snippets for simple tasks.
</p>


## What is TaskWizard?

TaskWizard is a powerful and versatile package designed to enhance your  development experience. It offers a collection of useful functions and utilities that can be easily integrated into your projects, providing a wide range of functionalities for developers.

## Installation

To install TaskWizard, you can use npm:

```bash
npm install taskwizard
```

## Features

TaskWizard comes with several functions and utilities for various tasks, including:

### Discord Colors

- `discordColors(): string[]`: Retrieve an array of Discord colors.

### Discord Emoji Validation

- `isDiscordEmoji(emoji: string): boolean`: Check if a text string represents a valid Discord emoji.

### File Search
- `searchFilesRecursive(folderPath: string, allowedExtensions?: string[]): string[]`: Recursively search for files with specified extensions in a folder and its subfolders.

### Fetch Buffer

- `fetchBuffer(url: string, init?: RequestInit): Promise<FetchBufferResult>`: Fetch buffer content from a URL.

### Country Flags Data

- `getInfoFlag(flag: string): any`: Retrieve information related to a specific country flag.
- `isValidCode(code: string): boolean`: Check if a provided code is a valid country code.
- `isValidEmoji(emoji: string): boolean`: Check if a provided emoji is a valid country flag emoji.
- `isValidFlagName(name: string): boolean`: Check if a provided name is a valid country flag name.
- `isValidFlag(flag: string): boolean`: Check if a provided input represents a valid country flag.
- `getLanguagesFromCode(code: string): string[]`: Get languages spoken in a specific country using its country code.
- `getLanguagesFromEmoji(emoji: string): string[]`: Get languages spoken in a specific country using its flag emoji.

### Time and Number Utilities

- `formatTimeFromSeconds(sec: number): string`: Convert seconds to a formatted string representing the time duration.
- `compactNumber(number: number): string`: Format a number to a compact representation with an appropriate unit suffix.
- `calculatePercentageBar(options: CalculatePercentageBarOptions): string`: Calculate the completion percentage and visually represent it using bars.
- `diffHours(dt2: Date, dt1: Date): number`: Calculate the difference in hours between two dates.

### Color Code Validation

- `isHex(colorCode: string): boolean`: Check if a given text represents a valid hexadecimal color code.

### Discord Invite Link Validation

- `isDiscordInviteLink(text: string): boolean`: Check if a given text contains a Discord invite link.

### Email Address Validation

- `isValidEmail(email: string): boolean`: Check if a given text represents a valid email address.
