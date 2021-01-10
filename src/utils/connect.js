import React, { PureComponent } from 'react'

import { StoreContext} from './context';

export function connect(mapStateToProps, mapDispachToProps) {
  return function enhanceHOC(WrapperComponent) {
    class EnhanceComponent extends PureComponent {
      
      constructor(props, context) {
        super(props)
        // super(props, context)

        this.state = {
          storeState: mapStateToProps(context.getState()),
          test: 0
        }
      }

      componentDidMount() {
        
        this.unsubscibe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscibe()
      }
      
      render() {
        console.log(mapStateToProps(this.context.getState()))
        return <WrapperComponent {...this.props}
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispachToProps(this.context.dispatch)}/>
      }
    }

    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}

