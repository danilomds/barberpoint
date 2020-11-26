import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import ImailTemplateProvider from '../models/IMailTemplateProvider';

class HendlebarsMailTemplateProvider implements ImailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HendlebarsMailTemplateProvider;
