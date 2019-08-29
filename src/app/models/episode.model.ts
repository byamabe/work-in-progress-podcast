import { Deserializable } from './deserializable.model';

export class Episode implements Deserializable {
  id: number;
  url: string;
  description: string;
  title: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
