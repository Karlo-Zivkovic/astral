/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Account($limit: Int!, $offset: Int!) {\n    accounts(limit: $limit, offset: $offset, orderBy: total_DESC) {\n      free\n      id\n      reserved\n      total\n      updatedAt\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n": types.AccountDocument,
    "\n  query AccountById($accountId: String!) {\n    accountById(id: $accountId) {\n      free\n      reserved\n      id\n      total\n      updatedAt\n      extrinsics(limit: 10) {\n        hash\n        id\n        block {\n          height\n        }\n        pos\n        name\n        success\n        timestamp\n        tip\n      }\n    }\n  }\n": types.AccountByIdDocument,
    "\n  query Blocks($limit: Int!, $offset: Int!) {\n    blocks(limit: $limit, offset: $offset, orderBy: height_DESC) {\n      hash\n      height\n      timestamp\n      stateRoot\n      events(limit: 100) {\n        id\n      }\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n": types.BlocksDocument,
    "\n  query BlockById($blockId: BigInt!) {\n    blocks(where: { height_eq: $blockId }) {\n      id\n      height\n      hash\n      stateRoot\n      timestamp\n      extrinsicRoot\n      specId\n      parentHash\n      extrinsics(limit: 10, orderBy: block_height_DESC) {\n        id\n        hash\n        name\n        block {\n          height\n          timestamp\n        }\n        pos\n      }\n      events(limit: 10, orderBy: block_height_DESC) {\n        id\n        name\n        phase\n        pos\n        block {\n          height\n          id\n        }\n        extrinsic {\n          pos\n          block {\n            height\n            id\n          }\n        }\n      }\n    }\n  }\n": types.BlockByIdDocument,
    "\n  query Events($limit: Int!, $offset: Int!) {\n    events(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      name\n      phase\n      pos\n      id\n      block {\n        height\n        timestamp\n      }\n      indexInBlock\n    }\n  }\n": types.EventsDocument,
    "\n  query Extrinsics($limit: Int!, $offset: Int!) {\n    extrinsics(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      hash\n      id\n      success\n      pos\n      block {\n        height\n        timestamp\n      }\n      name\n    }\n  }\n": types.ExtrinsicsDocument,
    "\n  query ExtrinsicsById($extrinsicId: String!) {\n    extrinsicById(id: $extrinsicId) {\n      pos\n      id\n      hash\n      signature\n      success\n      tip\n      block {\n        height\n        id\n        events(limit: 10) {\n          id\n          name\n          phase\n          pos\n          block {\n            height\n            id\n          }\n          extrinsic {\n            pos\n            block {\n              height\n              id\n            }\n          }\n        }\n        timestamp\n      }\n      name\n    }\n  }\n": types.ExtrinsicsByIdDocument,
};

export function graphql(source: "\n  query Account($limit: Int!, $offset: Int!) {\n    accounts(limit: $limit, offset: $offset, orderBy: total_DESC) {\n      free\n      id\n      reserved\n      total\n      updatedAt\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Account($limit: Int!, $offset: Int!) {\n    accounts(limit: $limit, offset: $offset, orderBy: total_DESC) {\n      free\n      id\n      reserved\n      total\n      updatedAt\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query AccountById($accountId: String!) {\n    accountById(id: $accountId) {\n      free\n      reserved\n      id\n      total\n      updatedAt\n      extrinsics(limit: 10) {\n        hash\n        id\n        block {\n          height\n        }\n        pos\n        name\n        success\n        timestamp\n        tip\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccountById($accountId: String!) {\n    accountById(id: $accountId) {\n      free\n      reserved\n      id\n      total\n      updatedAt\n      extrinsics(limit: 10) {\n        hash\n        id\n        block {\n          height\n        }\n        pos\n        name\n        success\n        timestamp\n        tip\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Blocks($limit: Int!, $offset: Int!) {\n    blocks(limit: $limit, offset: $offset, orderBy: height_DESC) {\n      hash\n      height\n      timestamp\n      stateRoot\n      events(limit: 100) {\n        id\n      }\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Blocks($limit: Int!, $offset: Int!) {\n    blocks(limit: $limit, offset: $offset, orderBy: height_DESC) {\n      hash\n      height\n      timestamp\n      stateRoot\n      events(limit: 100) {\n        id\n      }\n      extrinsics(limit: 100) {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query BlockById($blockId: BigInt!) {\n    blocks(where: { height_eq: $blockId }) {\n      id\n      height\n      hash\n      stateRoot\n      timestamp\n      extrinsicRoot\n      specId\n      parentHash\n      extrinsics(limit: 10, orderBy: block_height_DESC) {\n        id\n        hash\n        name\n        block {\n          height\n          timestamp\n        }\n        pos\n      }\n      events(limit: 10, orderBy: block_height_DESC) {\n        id\n        name\n        phase\n        pos\n        block {\n          height\n          id\n        }\n        extrinsic {\n          pos\n          block {\n            height\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlockById($blockId: BigInt!) {\n    blocks(where: { height_eq: $blockId }) {\n      id\n      height\n      hash\n      stateRoot\n      timestamp\n      extrinsicRoot\n      specId\n      parentHash\n      extrinsics(limit: 10, orderBy: block_height_DESC) {\n        id\n        hash\n        name\n        block {\n          height\n          timestamp\n        }\n        pos\n      }\n      events(limit: 10, orderBy: block_height_DESC) {\n        id\n        name\n        phase\n        pos\n        block {\n          height\n          id\n        }\n        extrinsic {\n          pos\n          block {\n            height\n            id\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Events($limit: Int!, $offset: Int!) {\n    events(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      name\n      phase\n      pos\n      id\n      block {\n        height\n        timestamp\n      }\n      indexInBlock\n    }\n  }\n"): (typeof documents)["\n  query Events($limit: Int!, $offset: Int!) {\n    events(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      name\n      phase\n      pos\n      id\n      block {\n        height\n        timestamp\n      }\n      indexInBlock\n    }\n  }\n"];
export function graphql(source: "\n  query Extrinsics($limit: Int!, $offset: Int!) {\n    extrinsics(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      hash\n      id\n      success\n      pos\n      block {\n        height\n        timestamp\n      }\n      name\n    }\n  }\n"): (typeof documents)["\n  query Extrinsics($limit: Int!, $offset: Int!) {\n    extrinsics(limit: $limit, offset: $offset, orderBy: block_height_DESC) {\n      hash\n      id\n      success\n      pos\n      block {\n        height\n        timestamp\n      }\n      name\n    }\n  }\n"];
export function graphql(source: "\n  query ExtrinsicsById($extrinsicId: String!) {\n    extrinsicById(id: $extrinsicId) {\n      pos\n      id\n      hash\n      signature\n      success\n      tip\n      block {\n        height\n        id\n        events(limit: 10) {\n          id\n          name\n          phase\n          pos\n          block {\n            height\n            id\n          }\n          extrinsic {\n            pos\n            block {\n              height\n              id\n            }\n          }\n        }\n        timestamp\n      }\n      name\n    }\n  }\n"): (typeof documents)["\n  query ExtrinsicsById($extrinsicId: String!) {\n    extrinsicById(id: $extrinsicId) {\n      pos\n      id\n      hash\n      signature\n      success\n      tip\n      block {\n        height\n        id\n        events(limit: 10) {\n          id\n          name\n          phase\n          pos\n          block {\n            height\n            id\n          }\n          extrinsic {\n            pos\n            block {\n              height\n              id\n            }\n          }\n        }\n        timestamp\n      }\n      name\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;