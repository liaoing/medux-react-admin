import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import styles from './index.m.less';

interface Props {
  className?: string;
}

class Component extends React.PureComponent<Props> {
  public render() {
    const {className = ''} = this.props;
    return (
      <div className={styles.root}>
        <div className="warp">
          <div className="panel">
            <div className="welcome">
              <Link className="hd" to={metaKeys.HomePathname}>
                <Icon className="logo" type="dingding" /> 回首页 &gt;
              </Link>
              <h2>欢迎使用 Medux</h2>
              <p>服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。</p>
            </div>
            <div className={'form ' + className}>{this.props.children}</div>
          </div>
          {/* <Icon type="reconciliation" className="pattern" />
          <Icon type="reconciliation" className="pattern" /> */}
        </div>
      </div>
    );
  }
}

export default Component;
