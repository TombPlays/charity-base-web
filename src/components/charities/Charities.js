import React, { Component } from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import { FilterBar } from './FilterBar'
import { CharitiesSearch } from './CharitiesSearch'
import { CharitiesSort } from './CharitiesSort'
import { CharitiesList } from './CharitiesList'
import { Layout, Row, Col } from 'antd'
import { FixedHeader, ScrollableContent, Page, ResponsiveSider } from '../general/Layout'
import CharitiesChart from './charts'

class Charities extends Component {
  state = {
    hoveredItem: {},
  }
  onQueryUpdate = query => {
    this.context.router.history.push(`/?${qs.stringify(query)}`)
  }
  render() {
    const { query, queryString, isMobile } = this.props
    return (
      <Page isMobile={isMobile}>
        <ResponsiveSider isMobile={isMobile}>
          <FilterBar queryString={queryString} query={query} />
        </ResponsiveSider>
        <Layout.Content style={{ position: 'relative', backgroundColor: '#FFF' }}>
          <FixedHeader isMobile={isMobile}>
            <CharitiesSearch query={query} />
            <CharitiesSort query={query} />
          </FixedHeader>
          <Row type='flex' style={{ height: '100%' }}>
            <Col xxl={12} xl={14} lg={16} md={20}>
              <ScrollableContent isMobile={isMobile}>
                <CharitiesList
                  queryString={queryString}
                  query={query}
                  onHover={hoveredItem => this.setState({ hoveredItem })}
                />
              </ScrollableContent>
            </Col>
            <Col xxl={12} xl={10} lg={8} md={4} style={{ paddingTop: 200 }}>
              <CharitiesChart
                queryString={queryString}
                query={query}
                onQueryUpdate={this.onQueryUpdate}
                hoveredItem={this.state.hoveredItem}
              />
            </Col>
          </Row>
        </Layout.Content>
      </Page>
    )
  }
}
Charities.propTypes = {
  query: PropTypes.object,
  queryString: PropTypes.string,
  isMobile: PropTypes.bool,
}
Charities.contextTypes = {
  router: PropTypes.object,
}

export { Charities }
