import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import ImailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements ImailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
