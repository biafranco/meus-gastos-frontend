import React from "react";
import { WrapperPage } from "../../styles/page.style";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

export const Home = () => (
  <WrapperPage>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Icon name="money bill alternate outline" size="big" />
          Project Name
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "10em" }}>
      <Header as="h1">Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper
        nunc. Duis ac purus id ipsum auctor malesuada imperdiet eu sapien.
        Aliquam pretium, augue venenatis imperdiet semper, eros libero vehicula
        eros, tristique suscipit sapien ex in enim. Fusce sit amet egestas odio.
        Donec pharetra ac leo eget laoreet. Integer in vehicula risus. Sed
        ligula risus, tincidunt in porta id, imperdiet accumsan orci. Phasellus
        pellentesque nibh vitae molestie commodo. Sed in felis convallis,
        fringilla sem lacinia, consectetur erat. Donec velit orci, venenatis sed
        mauris sed, dictum posuere eros. Morbi vestibulum pharetra metus at
        auctor. Curabitur auctor, erat vel consectetur malesuada, odio tortor
        sodales erat, non volutpat leo magna id arcu. Praesent facilisis cursus
        sem non vehicula. In scelerisque urna nulla, a auctor turpis vestibulum
        non. Maecenas mi eros, fringilla eu consectetur in, bibendum eu diam.
        Nam nec pharetra nisl, ut sollicitudin nisl. Proin nec rutrum justo.
        Nulla bibendum rhoncus purus vel euismod. Donec dui magna, posuere quis
        vehicula et, volutpat id libero. Sed dui arcu, imperdiet ut finibus a,
        ultricies in dui. Curabitur lobortis neque id sollicitudin lacinia.
        Nulla facilisi. Praesent pretium ullamcorper maximus. Ut id finibus
        nunc, at eleifend eros. Morbi vitae urna aliquet magna dignissim
        laoreet. Morbi bibendum ut nisi quis tincidunt. Praesent mattis ipsum
        lacus, eu scelerisque mi tempor ut. Quisque dictum ultricies cursus. Nam
        congue ipsum vitae sem interdum pharetra. Vestibulum vestibulum pretium
        sapien, sed ullamcorper turpis interdum eu. Donec dictum lacinia metus,
        vel scelerisque neque commodo ut. Cras hendrerit pellentesque lacus, et
        congue odio mattis quis. Ut volutpat orci nec euismod gravida.
        Suspendisse pretium nunc ipsum, nec tempor ex venenatis et. Duis
        imperdiet, nibh nec elementum congue, risus turpis ultricies mi, et
        interdum mauris libero at neque. Cras iaculis, nibh vel lacinia
        efficitur, mauris augue faucibus dui, sed varius dui ante sed ligula.
        Donec ex libero, tempor id nisi vel, imperdiet suscipit leo. Phasellus
        tempor semper ultricies. In tempus cursus sagittis. Fusce elementum,
        purus vitae imperdiet vestibulum, elit nunc pulvinar nunc, molestie
        malesuada orci massa quis ligula.
      </p>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 1" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />

        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </WrapperPage>
);
