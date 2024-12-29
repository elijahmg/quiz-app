/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as QuizIdLayoutImport } from './routes/$quizId/_layout'
import { Route as QuizIdLayoutWaitingImport } from './routes/$quizId/_layout/waiting'

// Create Virtual Routes

const QuizIdImport = createFileRoute('/$quizId')()
const IndexLazyImport = createFileRoute('/')()
const QuizIdCreateTeamLazyImport = createFileRoute('/$quizId/create-team')()
const AdminCreateIndexLazyImport = createFileRoute('/admin/create/')()
const AdminQuizIdIndexLazyImport = createFileRoute('/admin/$quizId/')()
const AdminQuizIdTeamsOverviewLazyImport = createFileRoute(
  '/admin/$quizId/teams-overview',
)()
const AdminQuizIdQuizControlLazyImport = createFileRoute(
  '/admin/$quizId/quiz-control',
)()
const AdminQuizIdGameOverviewLazyImport = createFileRoute(
  '/admin/$quizId/game-overview',
)()
const QuizIdLayoutScoreViewingLazyImport = createFileRoute(
  '/$quizId/_layout/score-viewing',
)()
const QuizIdLayoutPlayLazyImport = createFileRoute('/$quizId/_layout/play')()
const QuizIdLayoutEndGameLazyImport = createFileRoute(
  '/$quizId/_layout/end-game',
)()
const QuizIdLayoutCheckAnswersLazyImport = createFileRoute(
  '/$quizId/_layout/check-answers',
)()
const QuizIdLayoutBreakLazyImport = createFileRoute('/$quizId/_layout/break')()

// Create/Update Routes

const QuizIdRoute = QuizIdImport.update({
  id: '/$quizId',
  path: '/$quizId',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const QuizIdCreateTeamLazyRoute = QuizIdCreateTeamLazyImport.update({
  id: '/create-team',
  path: '/create-team',
  getParentRoute: () => QuizIdRoute,
} as any).lazy(() =>
  import('./routes/$quizId/create-team.lazy').then((d) => d.Route),
)

const QuizIdLayoutRoute = QuizIdLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => QuizIdRoute,
} as any)

const AdminCreateIndexLazyRoute = AdminCreateIndexLazyImport.update({
  id: '/admin/create/',
  path: '/admin/create/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/create/index.lazy').then((d) => d.Route),
)

const AdminQuizIdIndexLazyRoute = AdminQuizIdIndexLazyImport.update({
  id: '/admin/$quizId/',
  path: '/admin/$quizId/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/$quizId/index.lazy').then((d) => d.Route),
)

const AdminQuizIdTeamsOverviewLazyRoute =
  AdminQuizIdTeamsOverviewLazyImport.update({
    id: '/admin/$quizId/teams-overview',
    path: '/admin/$quizId/teams-overview',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/$quizId/teams-overview.lazy').then((d) => d.Route),
  )

const AdminQuizIdQuizControlLazyRoute = AdminQuizIdQuizControlLazyImport.update(
  {
    id: '/admin/$quizId/quiz-control',
    path: '/admin/$quizId/quiz-control',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/$quizId/quiz-control.lazy').then((d) => d.Route),
)

const AdminQuizIdGameOverviewLazyRoute =
  AdminQuizIdGameOverviewLazyImport.update({
    id: '/admin/$quizId/game-overview',
    path: '/admin/$quizId/game-overview',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/$quizId/game-overview.lazy').then((d) => d.Route),
  )

const QuizIdLayoutScoreViewingLazyRoute =
  QuizIdLayoutScoreViewingLazyImport.update({
    id: '/score-viewing',
    path: '/score-viewing',
    getParentRoute: () => QuizIdLayoutRoute,
  } as any).lazy(() =>
    import('./routes/$quizId/_layout/score-viewing.lazy').then((d) => d.Route),
  )

const QuizIdLayoutPlayLazyRoute = QuizIdLayoutPlayLazyImport.update({
  id: '/play',
  path: '/play',
  getParentRoute: () => QuizIdLayoutRoute,
} as any).lazy(() =>
  import('./routes/$quizId/_layout/play.lazy').then((d) => d.Route),
)

const QuizIdLayoutEndGameLazyRoute = QuizIdLayoutEndGameLazyImport.update({
  id: '/end-game',
  path: '/end-game',
  getParentRoute: () => QuizIdLayoutRoute,
} as any).lazy(() =>
  import('./routes/$quizId/_layout/end-game.lazy').then((d) => d.Route),
)

const QuizIdLayoutCheckAnswersLazyRoute =
  QuizIdLayoutCheckAnswersLazyImport.update({
    id: '/check-answers',
    path: '/check-answers',
    getParentRoute: () => QuizIdLayoutRoute,
  } as any).lazy(() =>
    import('./routes/$quizId/_layout/check-answers.lazy').then((d) => d.Route),
  )

const QuizIdLayoutBreakLazyRoute = QuizIdLayoutBreakLazyImport.update({
  id: '/break',
  path: '/break',
  getParentRoute: () => QuizIdLayoutRoute,
} as any).lazy(() =>
  import('./routes/$quizId/_layout/break.lazy').then((d) => d.Route),
)

const QuizIdLayoutWaitingRoute = QuizIdLayoutWaitingImport.update({
  id: '/waiting',
  path: '/waiting',
  getParentRoute: () => QuizIdLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/$quizId': {
      id: '/$quizId'
      path: '/$quizId'
      fullPath: '/$quizId'
      preLoaderRoute: typeof QuizIdImport
      parentRoute: typeof rootRoute
    }
    '/$quizId/_layout': {
      id: '/$quizId/_layout'
      path: '/$quizId'
      fullPath: '/$quizId'
      preLoaderRoute: typeof QuizIdLayoutImport
      parentRoute: typeof QuizIdRoute
    }
    '/$quizId/create-team': {
      id: '/$quizId/create-team'
      path: '/create-team'
      fullPath: '/$quizId/create-team'
      preLoaderRoute: typeof QuizIdCreateTeamLazyImport
      parentRoute: typeof QuizIdImport
    }
    '/$quizId/_layout/waiting': {
      id: '/$quizId/_layout/waiting'
      path: '/waiting'
      fullPath: '/$quizId/waiting'
      preLoaderRoute: typeof QuizIdLayoutWaitingImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/$quizId/_layout/break': {
      id: '/$quizId/_layout/break'
      path: '/break'
      fullPath: '/$quizId/break'
      preLoaderRoute: typeof QuizIdLayoutBreakLazyImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/$quizId/_layout/check-answers': {
      id: '/$quizId/_layout/check-answers'
      path: '/check-answers'
      fullPath: '/$quizId/check-answers'
      preLoaderRoute: typeof QuizIdLayoutCheckAnswersLazyImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/$quizId/_layout/end-game': {
      id: '/$quizId/_layout/end-game'
      path: '/end-game'
      fullPath: '/$quizId/end-game'
      preLoaderRoute: typeof QuizIdLayoutEndGameLazyImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/$quizId/_layout/play': {
      id: '/$quizId/_layout/play'
      path: '/play'
      fullPath: '/$quizId/play'
      preLoaderRoute: typeof QuizIdLayoutPlayLazyImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/$quizId/_layout/score-viewing': {
      id: '/$quizId/_layout/score-viewing'
      path: '/score-viewing'
      fullPath: '/$quizId/score-viewing'
      preLoaderRoute: typeof QuizIdLayoutScoreViewingLazyImport
      parentRoute: typeof QuizIdLayoutImport
    }
    '/admin/$quizId/game-overview': {
      id: '/admin/$quizId/game-overview'
      path: '/admin/$quizId/game-overview'
      fullPath: '/admin/$quizId/game-overview'
      preLoaderRoute: typeof AdminQuizIdGameOverviewLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/$quizId/quiz-control': {
      id: '/admin/$quizId/quiz-control'
      path: '/admin/$quizId/quiz-control'
      fullPath: '/admin/$quizId/quiz-control'
      preLoaderRoute: typeof AdminQuizIdQuizControlLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/$quizId/teams-overview': {
      id: '/admin/$quizId/teams-overview'
      path: '/admin/$quizId/teams-overview'
      fullPath: '/admin/$quizId/teams-overview'
      preLoaderRoute: typeof AdminQuizIdTeamsOverviewLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/$quizId/': {
      id: '/admin/$quizId/'
      path: '/admin/$quizId'
      fullPath: '/admin/$quizId'
      preLoaderRoute: typeof AdminQuizIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/create/': {
      id: '/admin/create/'
      path: '/admin/create'
      fullPath: '/admin/create'
      preLoaderRoute: typeof AdminCreateIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface QuizIdLayoutRouteChildren {
  QuizIdLayoutWaitingRoute: typeof QuizIdLayoutWaitingRoute
  QuizIdLayoutBreakLazyRoute: typeof QuizIdLayoutBreakLazyRoute
  QuizIdLayoutCheckAnswersLazyRoute: typeof QuizIdLayoutCheckAnswersLazyRoute
  QuizIdLayoutEndGameLazyRoute: typeof QuizIdLayoutEndGameLazyRoute
  QuizIdLayoutPlayLazyRoute: typeof QuizIdLayoutPlayLazyRoute
  QuizIdLayoutScoreViewingLazyRoute: typeof QuizIdLayoutScoreViewingLazyRoute
}

const QuizIdLayoutRouteChildren: QuizIdLayoutRouteChildren = {
  QuizIdLayoutWaitingRoute: QuizIdLayoutWaitingRoute,
  QuizIdLayoutBreakLazyRoute: QuizIdLayoutBreakLazyRoute,
  QuizIdLayoutCheckAnswersLazyRoute: QuizIdLayoutCheckAnswersLazyRoute,
  QuizIdLayoutEndGameLazyRoute: QuizIdLayoutEndGameLazyRoute,
  QuizIdLayoutPlayLazyRoute: QuizIdLayoutPlayLazyRoute,
  QuizIdLayoutScoreViewingLazyRoute: QuizIdLayoutScoreViewingLazyRoute,
}

const QuizIdLayoutRouteWithChildren = QuizIdLayoutRoute._addFileChildren(
  QuizIdLayoutRouteChildren,
)

interface QuizIdRouteChildren {
  QuizIdLayoutRoute: typeof QuizIdLayoutRouteWithChildren
  QuizIdCreateTeamLazyRoute: typeof QuizIdCreateTeamLazyRoute
}

const QuizIdRouteChildren: QuizIdRouteChildren = {
  QuizIdLayoutRoute: QuizIdLayoutRouteWithChildren,
  QuizIdCreateTeamLazyRoute: QuizIdCreateTeamLazyRoute,
}

const QuizIdRouteWithChildren =
  QuizIdRoute._addFileChildren(QuizIdRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/$quizId': typeof QuizIdLayoutRouteWithChildren
  '/$quizId/create-team': typeof QuizIdCreateTeamLazyRoute
  '/$quizId/waiting': typeof QuizIdLayoutWaitingRoute
  '/$quizId/break': typeof QuizIdLayoutBreakLazyRoute
  '/$quizId/check-answers': typeof QuizIdLayoutCheckAnswersLazyRoute
  '/$quizId/end-game': typeof QuizIdLayoutEndGameLazyRoute
  '/$quizId/play': typeof QuizIdLayoutPlayLazyRoute
  '/$quizId/score-viewing': typeof QuizIdLayoutScoreViewingLazyRoute
  '/admin/$quizId/game-overview': typeof AdminQuizIdGameOverviewLazyRoute
  '/admin/$quizId/quiz-control': typeof AdminQuizIdQuizControlLazyRoute
  '/admin/$quizId/teams-overview': typeof AdminQuizIdTeamsOverviewLazyRoute
  '/admin/$quizId': typeof AdminQuizIdIndexLazyRoute
  '/admin/create': typeof AdminCreateIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/$quizId': typeof QuizIdLayoutRouteWithChildren
  '/$quizId/create-team': typeof QuizIdCreateTeamLazyRoute
  '/$quizId/waiting': typeof QuizIdLayoutWaitingRoute
  '/$quizId/break': typeof QuizIdLayoutBreakLazyRoute
  '/$quizId/check-answers': typeof QuizIdLayoutCheckAnswersLazyRoute
  '/$quizId/end-game': typeof QuizIdLayoutEndGameLazyRoute
  '/$quizId/play': typeof QuizIdLayoutPlayLazyRoute
  '/$quizId/score-viewing': typeof QuizIdLayoutScoreViewingLazyRoute
  '/admin/$quizId/game-overview': typeof AdminQuizIdGameOverviewLazyRoute
  '/admin/$quizId/quiz-control': typeof AdminQuizIdQuizControlLazyRoute
  '/admin/$quizId/teams-overview': typeof AdminQuizIdTeamsOverviewLazyRoute
  '/admin/$quizId': typeof AdminQuizIdIndexLazyRoute
  '/admin/create': typeof AdminCreateIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/$quizId': typeof QuizIdRouteWithChildren
  '/$quizId/_layout': typeof QuizIdLayoutRouteWithChildren
  '/$quizId/create-team': typeof QuizIdCreateTeamLazyRoute
  '/$quizId/_layout/waiting': typeof QuizIdLayoutWaitingRoute
  '/$quizId/_layout/break': typeof QuizIdLayoutBreakLazyRoute
  '/$quizId/_layout/check-answers': typeof QuizIdLayoutCheckAnswersLazyRoute
  '/$quizId/_layout/end-game': typeof QuizIdLayoutEndGameLazyRoute
  '/$quizId/_layout/play': typeof QuizIdLayoutPlayLazyRoute
  '/$quizId/_layout/score-viewing': typeof QuizIdLayoutScoreViewingLazyRoute
  '/admin/$quizId/game-overview': typeof AdminQuizIdGameOverviewLazyRoute
  '/admin/$quizId/quiz-control': typeof AdminQuizIdQuizControlLazyRoute
  '/admin/$quizId/teams-overview': typeof AdminQuizIdTeamsOverviewLazyRoute
  '/admin/$quizId/': typeof AdminQuizIdIndexLazyRoute
  '/admin/create/': typeof AdminCreateIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/$quizId'
    | '/$quizId/create-team'
    | '/$quizId/waiting'
    | '/$quizId/break'
    | '/$quizId/check-answers'
    | '/$quizId/end-game'
    | '/$quizId/play'
    | '/$quizId/score-viewing'
    | '/admin/$quizId/game-overview'
    | '/admin/$quizId/quiz-control'
    | '/admin/$quizId/teams-overview'
    | '/admin/$quizId'
    | '/admin/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/$quizId'
    | '/$quizId/create-team'
    | '/$quizId/waiting'
    | '/$quizId/break'
    | '/$quizId/check-answers'
    | '/$quizId/end-game'
    | '/$quizId/play'
    | '/$quizId/score-viewing'
    | '/admin/$quizId/game-overview'
    | '/admin/$quizId/quiz-control'
    | '/admin/$quizId/teams-overview'
    | '/admin/$quizId'
    | '/admin/create'
  id:
    | '__root__'
    | '/'
    | '/$quizId'
    | '/$quizId/_layout'
    | '/$quizId/create-team'
    | '/$quizId/_layout/waiting'
    | '/$quizId/_layout/break'
    | '/$quizId/_layout/check-answers'
    | '/$quizId/_layout/end-game'
    | '/$quizId/_layout/play'
    | '/$quizId/_layout/score-viewing'
    | '/admin/$quizId/game-overview'
    | '/admin/$quizId/quiz-control'
    | '/admin/$quizId/teams-overview'
    | '/admin/$quizId/'
    | '/admin/create/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  QuizIdRoute: typeof QuizIdRouteWithChildren
  AdminQuizIdGameOverviewLazyRoute: typeof AdminQuizIdGameOverviewLazyRoute
  AdminQuizIdQuizControlLazyRoute: typeof AdminQuizIdQuizControlLazyRoute
  AdminQuizIdTeamsOverviewLazyRoute: typeof AdminQuizIdTeamsOverviewLazyRoute
  AdminQuizIdIndexLazyRoute: typeof AdminQuizIdIndexLazyRoute
  AdminCreateIndexLazyRoute: typeof AdminCreateIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  QuizIdRoute: QuizIdRouteWithChildren,
  AdminQuizIdGameOverviewLazyRoute: AdminQuizIdGameOverviewLazyRoute,
  AdminQuizIdQuizControlLazyRoute: AdminQuizIdQuizControlLazyRoute,
  AdminQuizIdTeamsOverviewLazyRoute: AdminQuizIdTeamsOverviewLazyRoute,
  AdminQuizIdIndexLazyRoute: AdminQuizIdIndexLazyRoute,
  AdminCreateIndexLazyRoute: AdminCreateIndexLazyRoute,
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
        "/",
        "/$quizId",
        "/admin/$quizId/game-overview",
        "/admin/$quizId/quiz-control",
        "/admin/$quizId/teams-overview",
        "/admin/$quizId/",
        "/admin/create/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/$quizId": {
      "filePath": "$quizId",
      "children": [
        "/$quizId/_layout",
        "/$quizId/create-team"
      ]
    },
    "/$quizId/_layout": {
      "filePath": "$quizId/_layout.tsx",
      "parent": "/$quizId",
      "children": [
        "/$quizId/_layout/waiting",
        "/$quizId/_layout/break",
        "/$quizId/_layout/check-answers",
        "/$quizId/_layout/end-game",
        "/$quizId/_layout/play",
        "/$quizId/_layout/score-viewing"
      ]
    },
    "/$quizId/create-team": {
      "filePath": "$quizId/create-team.lazy.tsx",
      "parent": "/$quizId"
    },
    "/$quizId/_layout/waiting": {
      "filePath": "$quizId/_layout/waiting.tsx",
      "parent": "/$quizId/_layout"
    },
    "/$quizId/_layout/break": {
      "filePath": "$quizId/_layout/break.lazy.tsx",
      "parent": "/$quizId/_layout"
    },
    "/$quizId/_layout/check-answers": {
      "filePath": "$quizId/_layout/check-answers.lazy.tsx",
      "parent": "/$quizId/_layout"
    },
    "/$quizId/_layout/end-game": {
      "filePath": "$quizId/_layout/end-game.lazy.tsx",
      "parent": "/$quizId/_layout"
    },
    "/$quizId/_layout/play": {
      "filePath": "$quizId/_layout/play.lazy.tsx",
      "parent": "/$quizId/_layout"
    },
    "/$quizId/_layout/score-viewing": {
      "filePath": "$quizId/_layout/score-viewing.lazy.tsx",
      "parent": "/$quizId/_layout"
    },
    "/admin/$quizId/game-overview": {
      "filePath": "admin/$quizId/game-overview.lazy.tsx"
    },
    "/admin/$quizId/quiz-control": {
      "filePath": "admin/$quizId/quiz-control.lazy.tsx"
    },
    "/admin/$quizId/teams-overview": {
      "filePath": "admin/$quizId/teams-overview.lazy.tsx"
    },
    "/admin/$quizId/": {
      "filePath": "admin/$quizId/index.lazy.tsx"
    },
    "/admin/create/": {
      "filePath": "admin/create/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */