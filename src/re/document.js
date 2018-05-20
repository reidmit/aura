/**
 * Represents the text content of an `Editor`.
 *
 * Text is stored as an array of strings, one for each line.
 */
export default class Document {
  constructor(options) {
    this.options = options;
    this.lines = [];
  }

  /**
   * Given a string, sets value of full document to that string,
   * replacing any existing lines.
   */
  setValue = newValue => {
    this.lines = newValue.split(/\r\n|\r|\n/);
  };

  /**
   * Gets the string value of the line at `lineIndex`.
   */
  getLine = lineIndex => this.lines[lineIndex];

  /**
   * Gets the length of the line at `lineIndex`.
   */
  getLineLength = lineIndex => this.lines[lineIndex].length;

  /**
   * Gets the total number of lines in the document.
   */
  getLineCount = () => this.lines.length;

  /**
   * Updates the line at given `lineIndex` to be `newValue`.
   */
  updateLine = (lineIndex, newValue) => {
    this.lines[lineIndex] = newValue;
  };
}
