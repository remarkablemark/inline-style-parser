interface Position {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
  source?: string;
}

interface Declaration {
  type: 'declaration';
  property: string;
  value: string;
  position: Position;
}

interface Comment {
  type: 'comment';
  comment: string;
  position: Position;
}

interface Options {
  source?: string;
  silent?: boolean;
}

export default function InlineStyleParser(
  style: string,
  options?: Options
): (Declaration | Comment)[];
