import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

export async function createDirectoryAndFile(directoryName, fileName, fileContent) {
  // Get the current working directory
  const currentDir = process.cwd();

  // Full path of the new directory and file
  const newDirectoryPath = join(currentDir, directoryName);
  const newFilePath = join(newDirectoryPath, fileName);

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
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}