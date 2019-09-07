import React from 'react';
import { Link } from 'react-router-dom';

import { Deploy } from '../../config';

import AccountProviderService from '../../services/AccountProvider';

import Grid from '../../components/Grid';
import Icon from '../../components/Icon';
import Panel from '../../components/Panel';
import PanelHeading from '../../components/PanelHeading';
import PanelBody from '../../components/PanelBody';
import Layout from "../../components/Layout";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      providers: []
    }
  }

  componentWillMount() {
    let accountProviderService = new AccountProviderService;

    accountProviderService
      .index('/api/account-providers')
      .then(response => {
        this.setState({
          providers: response.data
      });
    });
  }

  render() {
    const { providers } = this.state;

    return (
      <Layout>
        <div className="content">
          <div className="container-fluid heading">
            <h2>Account Settings</h2>
          </div>

          <div className="container-fluid">
            <div className="row">
              <Grid xs={12} sm={3}>
                <Panel>
                  <PanelHeading>
                    <h3 className="panel-title">Account Settings</h3>
                  </PanelHeading>

                  <div className="list-group">
                    <Link to={'/account'} className="list-group-item">Integrations</Link>
                  </div>
                </Panel>
              </Grid>

              <Grid xs={12} sm={9}>
                {providers.map(provider =>
                  <Panel key={provider.id}>
                    <PanelHeading>
                      <Icon iconName={provider.friendly_name} /> {provider.name}
                    </PanelHeading>
                    <PanelBody>
                      <a
                        className="btn btn-default"
                        href={Deploy.path + '/authorize/' + provider.friendly_name}
                        title={'Connect to ' + provider.name}
                      >{provider.deploy_access_token ? 'Refresh Token' : 'Connect to ' + provider.name}</a>
                    </PanelBody>
                  </Panel>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AccountPage;