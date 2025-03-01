/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BaseIndexImport } from './routes/_base/index'

// Create Virtual Routes

const BaseLazyImport = createFileRoute('/_base')()

// Create/Update Routes

const BaseLazyRoute = BaseLazyImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_base.lazy').then((d) => d.Route))

const BaseIndexRoute = BaseIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BaseLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_base': {
      id: '/_base'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BaseLazyImport
      parentRoute: typeof rootRoute
    }
    '/_base/': {
      id: '/_base/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof BaseIndexImport
      parentRoute: typeof BaseLazyImport
    }
  }
}

// Create and export the route tree

interface BaseLazyRouteChildren {
  BaseIndexRoute: typeof BaseIndexRoute
}

const BaseLazyRouteChildren: BaseLazyRouteChildren = {
  BaseIndexRoute: BaseIndexRoute,
}

const BaseLazyRouteWithChildren = BaseLazyRoute._addFileChildren(
  BaseLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof BaseLazyRouteWithChildren
  '/': typeof BaseIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof BaseIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_base': typeof BaseLazyRouteWithChildren
  '/_base/': typeof BaseIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/'
  id: '__root__' | '/_base' | '/_base/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  BaseLazyRoute: typeof BaseLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  BaseLazyRoute: BaseLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_base"
      ]
    },
    "/_base": {
      "filePath": "_base.lazy.tsx",
      "children": [
        "/_base/"
      ]
    },
    "/_base/": {
      "filePath": "_base/index.tsx",
      "parent": "/_base"
    }
  }
}
ROUTE_MANIFEST_END */
