import * as React from 'react';
import { StatelessComponent, Component, PropTypes, Children } from 'react';
import { HashRouter, Match, Miss } from 'react-router';

interface LazilyMatchProps {
  pattern: string,
  getComponent: ()=>Promise<any>
}
export const LazilyMatch: StatelessComponent<LazilyMatchProps> = ({pattern,getComponent}) => {
  return <Match
    pattern={pattern}
    children={(props) => {
      const {matched} = props;
      return matched && (
        <LazilyLoad modules={{ Component: () => importLazy(getComponent()) }} >
          {({Component}: { Component: React.ComponentClass<any> }) => (<Component {...props}/>)}
        </LazilyLoad>
      )
    } }
    />
};



interface LazilyLoadProps extends React.DOMAttributes<any>{
  modules: {[key:string]:any},
  children?: Function;
}
interface LazilyLoadState {
  isLoaded?:boolean,
  modules?:{[key:string]:any}
}
class LazilyLoad extends React.Component<LazilyLoadProps,LazilyLoadState> {

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  private _isMounted = false;
  constructor(...args:any[]) {
    super(...args);
    this.state = {
      isLoaded: false,
      modules: null as any
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillReceiveProps(next: LazilyLoadProps): void {
    if (next.modules === this.props.modules) return null;
    this.load(next);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  private load(props: LazilyLoadProps) {
    this.setState({
      isLoaded: false,
    });

    const { modules } = props;
    const keys = Object.keys(modules);

    Promise.all(keys.map((key) => modules[key]()))
      .then((values) => (keys.reduce((agg, key, index) => {
        agg[key] = values[index];
        return agg;
      }, {} as {[key:string]:any} )))
      .then((result) => {
        if (!this._isMounted) return null;
        this.setState({ modules: result, isLoaded: true });
      });
  }

  render() {
    if (!this.state.isLoaded) return null;
    return Children.only(this.props.children(this.state.modules));
  }
}

export const importLazy = (promise: Promise<any>) => (
  promise.then((result) => result.default)
);
