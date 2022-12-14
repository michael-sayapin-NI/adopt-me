import { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import { Animal, PetAPIResponse } from './APIResponsesTypes';

interface DetailsProps {
  params: {
    id?: string;
  };
  theme: string;
}

class Details extends Component<DetailsProps> {
  state = {
    loading: true,
    showModal: false,
    animal: '' as Animal,
    breed: '',
    city: '',
    state: '',
    description: '',
    name: '',
    images: [] as string[],
  };

  async componentDidMount() {
    const { params } = this.props;

    if (!params.id) {
      return;
    }

    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`);
    const json = (await res.json()) as PetAPIResponse;

    this.setState({ loading: false, ...json.pets[0] });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
      showModal,
      loading,
    } = this.state;

    if (loading) {
      return <h2>loading...</h2>;
    }

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a
                    href="https://bit.ly/pet-adopt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yes
                  </a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }: { theme: string }) => ({ theme });

const ReduxWrappedDetails = connect(mapStateToProps)(Details);

export const WrappedDetails = () => {
  const params = useParams<{ id: string }>();

  return (
    <ErrorBoundary>
      <ReduxWrappedDetails params={params} />
    </ErrorBoundary>
  );
};
