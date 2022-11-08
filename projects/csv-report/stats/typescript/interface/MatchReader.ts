import {dateStringToDate,MatchResult} from '../utils'

interface DataReader
{
  read(): void;
  data: string[][];
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader
{
  public matches: MatchData[] = [];
  public reader: DataReader;


  constructor(inputReader: DataReader)
  {
    this.reader = inputReader;
  }

  load(): void
  {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData =>
    {
      return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
      ]
    }) 
  }
}