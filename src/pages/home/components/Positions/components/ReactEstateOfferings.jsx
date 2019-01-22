import React from 'react';
import { Collapse, List } from 'antd';

const { Panel } = Collapse;

const ReactEstateOfferings = ({ realEstateOfferings }) => (
  <Collapse defaultActiveKey={['1']}>
    <Panel header="Real estate offerings">
      <List
        itemLayout="horizontal"
        dataSource={realEstateOfferings}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              description={(
                <div className="list-item">
                  <div className="list-item__name">
                    {item.name}
                  </div>
                  <div className="list-item__percent">
                    {item.percent}
                    %
                  </div>
                  <div className="list-item__shares-value">
                    $
                    {item.valueOfShares}
                  </div>
                  <div className="list-item__position-total">
                    $
                    {item.positionTotal}
                  </div>
                </div>
              )}
            />
          </List.Item>
        )}
      />
    </Panel>
  </Collapse>
);

export default ReactEstateOfferings;
