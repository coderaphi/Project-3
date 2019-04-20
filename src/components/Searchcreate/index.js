import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment
} from "semantic-ui-react";
import Select from 'react-select';

const Searchcreate = props => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Header icon>
            <Icon name="search" />
            Find a Product
          </Header>

          <Select
            value={props.categoryName}
            onChange={v => props.onCategoryChange(v)}
            className={"select-box"}
            options={props.categories.map(category => ({
              label: category.name,
              value: category.id
            }))}
          />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name="gift" />
            Create an iVunt
          </Header>
          <Button primary onClick={props.onClick}>
            Create
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Searchcreate;
