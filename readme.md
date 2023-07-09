# [ANSI Text Removal - Chrome Extension]()

- This is just a Chrome Extension that you click to remove ANSI Shell Colored Text from the page by regex matching with javascript. 
- If the text isn't rendered with the color, it just displays the ANSI codes and makes it difficult to read.
- The extension icon must be clicked for it to process the text


Specifically, this happens in Azure DevOps logs when viewing the raw log file in .txt format. 
Other, similar extensions only work with 1 specific tool like AWS, or they only work on html files.


This extension uses regex to try to remove the code. It's possible the current regex doesn't capture all things we want to remove, or it could remove things unexpectedly. As more patterns are identified as causing problems, they can be added to the processing.

[GitHub](https://github.com/BGrogan/ANSI-Text-Removal/)