declare module 'react-router' {

  interface HashMap {
    [key: string]: any
  }
  export interface InjectedRouteProps {
    location: LinkToConfig,
    params: {},
    pattern: string,
    pathname: string,
    isExact: boolean
  }
  interface LinkToConfig extends Location, HashMap {
    pathname: string,
    query?: {}
    state?: {}
  }
  interface RouterProps {
    history?: any
  }

  interface LinkChildrenProps {
    isActive?: boolean,
    location?: string,
    href?: string,
    onClick?: Function,
    transition: Function,
  }
  interface LinkProps {
    to: string|LinkToConfig,
    isActive?: ( location?: Location, props?: any[] )=>boolean,
    activeStyle?: string|{},
    activeClassName?: string,
    children?: ( props: LinkChildrenProps )=>any|React.ReactNode,
    activeOnlyWhenExact?: boolean,
  }
  interface BaseOutletProps {
    component?: React.ReactElement,
  }
  interface MatchProps extends BaseOutletProps {
    pattern: string,
    render?: ( props?: InjectedRouteProps )=>any,
    exactly?: boolean,
    location?: {},
    children?: ( props:{matched:boolean,[key:string]:any} )=>any,
  }
  interface MissProps extends BaseOutletProps {
    render?: ( props: {location: {}} )=>any
  }
  interface RedirectProps {
    to: string|LinkToConfig,
  }
  interface NavigationPromptProps {
    message?: (( nextLocation?: Location )=>string|boolean) | string,
    when?: boolean
  }

  interface RouterProps {
    basename?: string,
  }
  interface HashRouterProps extends RouterProps {
    hashType?: 'slash' | 'noslash' | 'hasbang'
  }
  interface MemoryRouterProps {
    initialIndex?: number,
    initialEntries?: Location[]
  }
  interface BrowserRouterProps extends RouterProps {}

  class MemoryRouter extends React.Component<MemoryRouterProps,any> {}
  class ServerRouter extends React.Component<any,any> {}
  class HashRouter extends React.Component<HashRouterProps,any> {}
  class BrowserRouter extends React.Component<BroserRouterProps,any> {}

  class Link extends React.Component<LinkProps,any> {}
  class Match extends React.Component<MatchProps,any> {}
  class Miss extends React.Component<MissProps,any> {}
  class Redirect extends React.Component<RedirectProps,any> {}
  class NavigationPrompt extends React.Component<NavigationPromptProps,any> {}
}
