import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

/**
 * источник https://react-day-picker.js.org/examples/input-from-to/
 */
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: localStorage.getItem('dateFrom') ? new Date(localStorage.getItem('dateFrom')) : undefined,
      to: localStorage.getItem('dateTo') ? new Date(localStorage.getItem('dateTo')) : undefined,
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
    localStorage.setItem('dateFrom', from);
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
    localStorage.setItem('dateTo', to);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={(el) => (this.to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            showOverlay = {false}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        <Helmet>
          <style>{`
            .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                background-color: #f0f8ff !important;
                color: #4a90e2;
            }
            .InputFromTo .DayPicker-Day {
                border-radius: 0 !important;
            }
            .InputFromTo .DayPicker-Day--start {
                border-top-left-radius: 50% !important;
                border-bottom-left-radius: 50% !important;
            }
            .InputFromTo .DayPicker-Day--end {
                border-top-right-radius: 50% !important;
                border-bottom-right-radius: 50% !important;
            }
            .InputFromTo .DayPickerInput-Overlay {
                width: 550px;
            }
            .InputFromTo-to .DayPickerInput-Overlay {
                margin-left: -198px;
            }
            `}
            </style>
        </Helmet>
      </div>
    );
  }
}
