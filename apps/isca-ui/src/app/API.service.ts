/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateDeseases: OnCreateDeseasesSubscription;
  onUpdateDeseases: OnUpdateDeseasesSubscription;
  onDeleteDeseases: OnDeleteDeseasesSubscription;
};

export type CreateDeseasesInput = {
  id?: string | null;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
};

export type ModelDeseasesConditionInput = {
  name?: ModelStringInput | null;
  anatomy?: ModelStringInput | null;
  etiology?: ModelStringInput | null;
  epidemiology?: ModelStringInput | null;
  transmission?: ModelStringInput | null;
  pathogeny?: ModelStringInput | null;
  symptom?: ModelStringInput | null;
  diagnosis?: ModelStringInput | null;
  differential?: ModelStringInput | null;
  treatment?: ModelStringInput | null;
  control?: ModelStringInput | null;
  bibliography?: ModelStringInput | null;
  categories?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  banner?: ModelStringInput | null;
  commonImage?: ModelStringInput | null;
  and?: Array<ModelDeseasesConditionInput | null> | null;
  or?: Array<ModelDeseasesConditionInput | null> | null;
  not?: ModelDeseasesConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Deseases = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateDeseasesInput = {
  id: string;
  name?: string | null;
  anatomy?: string | null;
  etiology?: string | null;
  epidemiology?: string | null;
  transmission?: string | null;
  pathogeny?: string | null;
  symptom?: string | null;
  diagnosis?: string | null;
  differential?: string | null;
  treatment?: string | null;
  control?: string | null;
  bibliography?: Array<string | null> | null;
  categories?: Array<string | null> | null;
  thumbnail?: string | null;
  banner?: string | null;
  commonImage?: string | null;
};

export type DeleteDeseasesInput = {
  id: string;
};

export type ModelDeseasesFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  anatomy?: ModelStringInput | null;
  etiology?: ModelStringInput | null;
  epidemiology?: ModelStringInput | null;
  transmission?: ModelStringInput | null;
  pathogeny?: ModelStringInput | null;
  symptom?: ModelStringInput | null;
  diagnosis?: ModelStringInput | null;
  differential?: ModelStringInput | null;
  treatment?: ModelStringInput | null;
  control?: ModelStringInput | null;
  bibliography?: ModelStringInput | null;
  categories?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  banner?: ModelStringInput | null;
  commonImage?: ModelStringInput | null;
  and?: Array<ModelDeseasesFilterInput | null> | null;
  or?: Array<ModelDeseasesFilterInput | null> | null;
  not?: ModelDeseasesFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelDeseasesConnection = {
  __typename: "ModelDeseasesConnection";
  items: Array<Deseases>;
  nextToken?: string | null;
};

export type CreateDeseasesMutation = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateDeseasesMutation = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteDeseasesMutation = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetDeseasesQuery = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListDeseasesQuery = {
  __typename: "ModelDeseasesConnection";
  items: Array<{
    __typename: "Deseases";
    id: string;
    name: string;
    anatomy: string;
    etiology: string;
    epidemiology: string;
    transmission: string;
    pathogeny: string;
    symptom: string;
    diagnosis: string;
    differential: string;
    treatment: string;
    control: string;
    bibliography: Array<string | null>;
    categories: Array<string | null>;
    thumbnail: string;
    banner: string;
    commonImage: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  }>;
  nextToken?: string | null;
};

export type OnCreateDeseasesSubscription = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateDeseasesSubscription = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteDeseasesSubscription = {
  __typename: "Deseases";
  id: string;
  name: string;
  anatomy: string;
  etiology: string;
  epidemiology: string;
  transmission: string;
  pathogeny: string;
  symptom: string;
  diagnosis: string;
  differential: string;
  treatment: string;
  control: string;
  bibliography: Array<string | null>;
  categories: Array<string | null>;
  thumbnail: string;
  banner: string;
  commonImage: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDeseases(
    input: CreateDeseasesInput,
    condition?: ModelDeseasesConditionInput
  ): Promise<CreateDeseasesMutation> {
    const statement = `mutation CreateDeseases($input: CreateDeseasesInput!, $condition: ModelDeseasesConditionInput) {
        createDeseases(input: $input, condition: $condition) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDeseasesMutation>response.data.createDeseases;
  }
  async UpdateDeseases(
    input: UpdateDeseasesInput,
    condition?: ModelDeseasesConditionInput
  ): Promise<UpdateDeseasesMutation> {
    const statement = `mutation UpdateDeseases($input: UpdateDeseasesInput!, $condition: ModelDeseasesConditionInput) {
        updateDeseases(input: $input, condition: $condition) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeseasesMutation>response.data.updateDeseases;
  }
  async DeleteDeseases(
    input: DeleteDeseasesInput,
    condition?: ModelDeseasesConditionInput
  ): Promise<DeleteDeseasesMutation> {
    const statement = `mutation DeleteDeseases($input: DeleteDeseasesInput!, $condition: ModelDeseasesConditionInput) {
        deleteDeseases(input: $input, condition: $condition) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDeseasesMutation>response.data.deleteDeseases;
  }
  async GetDeseases(id: string): Promise<GetDeseasesQuery> {
    const statement = `query GetDeseases($id: ID!) {
        getDeseases(id: $id) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDeseasesQuery>response.data.getDeseases;
  }
  async ListDeseases(
    filter?: ModelDeseasesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDeseasesQuery> {
    const statement = `query ListDeseases($filter: ModelDeseasesFilterInput, $limit: Int, $nextToken: String) {
        listDeseases(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            anatomy
            etiology
            epidemiology
            transmission
            pathogeny
            symptom
            diagnosis
            differential
            treatment
            control
            bibliography
            categories
            thumbnail
            banner
            commonImage
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDeseasesQuery>response.data.listDeseases;
  }
  OnCreateDeseasesListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDeseases">>
  > {
    const statement = `subscription OnCreateDeseases($owner: String) {
        onCreateDeseases(owner: $owner) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDeseases">>
    >;
  }

  OnUpdateDeseasesListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDeseases">>
  > {
    const statement = `subscription OnUpdateDeseases($owner: String) {
        onUpdateDeseases(owner: $owner) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDeseases">>
    >;
  }

  OnDeleteDeseasesListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDeseases">>
  > {
    const statement = `subscription OnDeleteDeseases($owner: String) {
        onDeleteDeseases(owner: $owner) {
          __typename
          id
          name
          anatomy
          etiology
          epidemiology
          transmission
          pathogeny
          symptom
          diagnosis
          differential
          treatment
          control
          bibliography
          categories
          thumbnail
          banner
          commonImage
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDeseases">>
    >;
  }
}
