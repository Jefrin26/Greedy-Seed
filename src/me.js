import React from 'react'
import avatar from './avatar.png'
import './me.css'
import bluetick from './bluetick.png';

function me() {
  var completed=4;
  var cancelled=2;
  return (
    <div id='bgl'>
        <div id='container'>
            <div id='nameCard'>
              <img src={avatar} id='avatar'></img>
              <h3 id='name'>Avatar</h3>
              <div id='details'>
                <h5>E-mail: avatar@gmail.com</h5>
                <h5>Gender: Male</h5>
                <h5>Client ID: 1234</h5>
              </div>
            </div>
            <div id='status'>
              <div className='box'>
                <h3 className='h3' id='all'>{completed+cancelled}</h3>
                <h4>All Bookings</h4>
              </div>
              <div className='box'>
                <h3 className='h3'id='completed'>{completed}</h3>
                <h4>Completed</h4>
              </div>
              <div className='box'>
                <h3 className='h3'id='cancelled'>{cancelled}</h3>
                <h4>Cancelled</h4>
              </div>
            </div>
            <div id='log'>
            <h4 id='bookingS'>Booking Status:</h4>
            <table>
              <tr>
                <th>January</th>
              </tr>
              <tr>
                <td>10</td>
                <td>E-Waste</td>
                <td className='cancelled'>Cancelled</td>
                <td>200rs.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Degradable</td>
                <td className='completed'>Completed</td>
                <td>150rs.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>E-Waste</td>
                <td className='cancelled'>Cancelled</td>
                <td>300rs.</td>
              </tr>
              <tr>
                <th>December</th>
              </tr>
              <tr>
                <td>29</td>
                <td>Non-Degradable</td>
                <td className='completed'>Completed</td>
                <td>125rs.</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Degradable</td>
                <td className='completed'>Completed</td>
                <td>100rs.</td>
              </tr>
              <tr>
                <td>19</td>
                <td>E-Waste</td>
                <td className='completed'>Completed</td>
                <td>500rs.</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}

export default me