import { TemplateEntity } from "../entities/template.entity";

export abstract class TemplateContract {
    abstract templateAbsFunction(): Promise<TemplateEntity[]>;
}