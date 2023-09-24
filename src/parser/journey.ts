import { Diagram } from "mermaid/dist/Diagram.js";

export const parseMermaidJourneyDiagram = (
  diagram: Diagram,
  containerEl: Element
): void => {
  diagram.parse();

  const mermaidParser = diagram.parser.yy;
  const diagramTitle = mermaidParser.getDiagramTitle();
};
