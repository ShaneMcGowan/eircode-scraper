import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

// Configuration
const directoryName = 'new-folder';
const fileName = 'example.txt';
const fileContent = 'This is an example file created by Node.js script.';

// Get the current working directory
const currentDir = process.cwd();

// Full path of the new directory and file
const newDirectoryPath = join(currentDir, directoryName);
const newFilePath = join(newDirectoryPath, fileName);

export async function createDirectoryAndFile() {
  try {
    // Create directory
    await mkdir(newDirectoryPath, { recursive: true });
    console.log(`✅ Directory created successfully: ${newDirectoryPath}`);
    
    // Create file
    await writeFile(newFilePath, fileContent);
    console.log(`✅ File created successfully: ${newFilePath}`);
    
    // Display summary
    console.log('\nSummary:');
    console.log(`- Created directory: ${directoryName}`);
    console.log(`- Created file: ${fileName}`);
    console.log(`- File content: "${fileContent}"`);
    
    console.log('\nYou can modify the script to:');
    console.log('- Change the directory name by updating the "directoryName" variable');
    console.log('- Change the file name by updating the "fileName" variable');
    console.log('- Change the file content by updating the "fileContent" variable');
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}