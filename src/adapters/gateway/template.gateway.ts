import { TemplateGatewayContract } from "../../domain/gateway/template.gateway";

export class TemplateGateway implements TemplateGatewayContract {
  templateFunctionAbs(_data: any): void {
    throw new Error("Method not implemented.");
  }
}