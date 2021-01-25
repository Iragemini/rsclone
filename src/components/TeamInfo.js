import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = {
  img: {
    width: '30px0',
    height: '30px',
  },
  a: {
    textDecoration: 'none',
    color: 'black',
  },
};

function TeamInfo(props) {
  return (
        <div className="container-fluid">
            <div className="row">
                <Link className="text-dark" key={ props.data.id } to={`${props.url}/${props.data.id}`} style={style.a}>
                    <div className="col-sm-6">
                        <img src={props.data.crestUrl} className="float-left" style={style.img} alt={props.data.name}/>
                    </div>
                <div className="col-sm-6 float-left">{props.data.name}</div>
                </Link>
                {
                    props.data.website !== null
                      ? <div className="col-sm-6">
                        {
                            <a href={props.data.website} style={style.a} target="blank">
                                {
                                    `Website: ${props.data.website}`
                                }
                            </a>
                        }
                    </div>
                      : ''
                }
                <div className="col-sm-6">{`Club colors: ${props.data.clubColors}`}</div>
                <div className="col-sm-6">{`Founded: ${props.data.founded}`}</div>
                {
                    props.data.email !== null
                      ? <div className="col-sm-6">
                        <a
                            href={`mailto:${props.data.email}`}
                            style={style.a}
                        >
                            {`E-mail: ${props.data.email}`}
                        </a>
                    </div>
                      : ''
                }

            </div>

        </div>
  );
}

TeamInfo.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default TeamInfo;
