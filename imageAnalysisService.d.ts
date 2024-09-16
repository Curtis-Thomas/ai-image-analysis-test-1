// imageAnalysisService.d.ts

interface AnalyzeImageResult {
  description?: {
    captions: { text: string; confidence: number }[];
  };
  faces?: {
    gender: string;
    age: number;
    faceRectangle: { top: number; left: number; width: number; height: number };
  }[];
  objects?: {
    object: string;
    confidence: number;
    rectangle: { x: number; y: number; w: number; h: number };
  }[];
  tags?: { name: string; confidence: number }[];
  imageType?: {
    clipArtType: number;
    lineDrawingType: number;
  };
  captionResult?: {
    text: string;
    confidence: number;
  };
}

export function analyzeImageFromUrl(imageUrl: string): Promise<AnalyzeImageResult>;