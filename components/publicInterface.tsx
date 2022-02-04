export interface catalog {
  id: number;
  name: string;
  created: string;
  pages: page[] | undefined;
}

export interface page {
  ip: string;
  filePath: string;
  catalogId: number;
  tag: string;
  pageNumber: number;
}

export interface content {
  name: string;
  startPage: number;
  endPage: number;
  catalogId: number;
}

export interface catalogWithContents {
  id: number;
  name: string;
  created: string;
  contents: content[];
}
