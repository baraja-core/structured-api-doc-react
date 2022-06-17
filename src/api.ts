export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  CREATE = 'CREATE',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface DocumentationEndpoint {
  route: string;
  class: string;
  name: string;
  description: string | null;
  public: boolean;
  actions: DocumentationEndpointAction[];
}

export interface DocumentationEndpointAction {
  name: string;
  method: string;
  route: string;
  httpMethod: string;
  methodName: string;
  description: string | null;
  roles: string[];
  throws: string[];
  parameters: DocumentationEndpointActionParameter[];
}

export interface DocumentationEndpointActionParameter {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
}

export type documentation = DocumentationEndpoint[];
