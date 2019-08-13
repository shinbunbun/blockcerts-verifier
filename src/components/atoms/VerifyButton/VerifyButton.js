import { html } from '@polymer/lit-element';
import CSS from './_components.verify-button-css';

export default function VerifyButton ({ isHollow = false, isDisabled = false, onClick = () => {} } = {}) {
  const buttonClass = [
    'buv-c-verify-button',
    isHollow ? 'buv-c-verify-button--hollow' : '',
    isDisabled ? 'is-disabled' : ''
  ].join(' ');

  return html`
    ${CSS}
    <button class$='${buttonClass}' on-click='${onClick}' disabled?='${isDisabled}'>
      <label class='buv-c-verify-button__label'>Verify</label>
    </button>
  `;
}
