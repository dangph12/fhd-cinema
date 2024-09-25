import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Row } from 'react-bootstrap';
import Nestable from 'react-nestable';
const items = [{
  id: 0,
  text: 'Metrics',
  children: [{
    id: 1,
    text: 'Daily Metrics',
    children: [{
      id: 2,
      text: 'Daily Order Metrics',
      children: [{
        id: 3,
        text: 'Categorywise Daily order metrics',
        children: [{
          id: 4,
          text: 'Categorywise daily order count'
        }, {
          id: 5,
          text: 'Categorywise daily bookings'
        }]
      }, {
        id: 6,
        text: 'Storewise Daily order metrics',
        children: [{
          id: 7,
          text: 'Storewise daily order count'
        }, {
          id: 8,
          text: 'Storewise daily bookings'
        }]
      }]
    }, {
      id: 9,
      text: 'Daily Invoice Metrics',
      children: [{
        id: 10,
        text: 'Categorywise Daily order metrics',
        children: [{
          id: 11,
          text: 'Categorywise daily order count'
        }, {
          id: 12,
          text: 'Categorywise daily bookings'
        }]
      }, {
        id: 13,
        text: 'Storewise Daily order metrics',
        children: [{
          id: 14,
          text: 'Storewise daily order count'
        }, {
          id: 15,
          text: 'Storewise daily bookings'
        }]
      }]
    }]
  }, {
    id: 16,
    text: 'monthly Metrics',
    children: [{
      id: 17,
      text: 'Monthly Order Metrics',
      children: [{
        id: 18,
        text: 'Categorywise Monthly order metrics',
        children: [{
          id: 19,
          text: 'Categorywise monthly order count'
        }, {
          id: 20,
          text: 'Categorywise monthly bookings'
        }]
      }, {
        id: 21,
        text: 'Storewise Monthly order metrics',
        children: [{
          id: 22,
          text: 'Storewise monthly order count'
        }, {
          id: 23,
          text: 'Storewise monthly bookings'
        }]
      }]
    }, {
      id: 24,
      text: 'Monthly Invoice Metrics',
      children: [{
        id: 25,
        text: 'Categorywise Monthly  invoice metrics',
        children: [{
          id: 26,
          text: 'Categorywise monthly invoice count'
        }, {
          id: 27,
          text: 'Categorywise monthly revenue'
        }]
      }, {
        id: 28,
        text: 'Storewise monthly invoice metrics',
        children: [{
          id: 29,
          text: 'Storewise monthly invoice count'
        }, {
          id: 30,
          text: 'Storewise monthly revenue'
        }]
      }]
    }]
  }]
}, {
  id: 31,
  text: 'Settings',
  children: [{
    id: 32,
    text: 'Personal Settings',
    children: [{
      id: 33,
      text: 'Password Settings'
    }, {
      id: 34,
      text: 'Viewing Preferences'
    }]
  }, {
    id: 35,
    text: 'Org Settings',
    children: [{
      id: 36,
      text: 'Teams'
    }, {
      id: 37,
      text: 'Billing'
    }]
  }]
}];
const AllTreeView = () => {
  return <Row className="justify-content-center">
      <Col md={6} lg={6}>
        <ComponentContainerCard title="Listree Example">
          <Nestable className="cursor-pointer" items={items} renderItem={({
          item
        }) => item.text} />
        </ComponentContainerCard>
      </Col>
      <Col md={6} lg={6}>
        <ComponentContainerCard title="Listree Example">
          <Nestable className="cursor-pointer" items={items} renderItem={({
          item
        }) => item.text} />
        </ComponentContainerCard>
      </Col>
    </Row>;
};
export default AllTreeView;