import { TemplateEntity } from "../../domain/entities/template.entity";
import { TemplateContract } from "../../domain/repository/template.repository";

export class TemplateCacheRepo implements TemplateContract {
    templateAbsFunction(): Promise<TemplateEntity[]> {
        throw new Error("Method not implemented.");
    }
}