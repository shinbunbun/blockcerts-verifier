import { html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/lib/unsafe-html.js';
import CSS from './_components.fullscreen-certificate-css';
import '../../atoms/CertificateDetails';
import CloseButton from '../../atoms/CloseButton';
import '../../atoms/DownloadLink';
import '../../atoms/FinalVerificationStep';
import '../../atoms/VerifyOtherCertificateLink';
import BlockcertsLogo from '../../atoms/BlockcertsLogo';
import '../../atoms/VerifyButton';
import '../../atoms/FullCertificateV1';
import '../../molecules/Metadata';
import '../../molecules/SocialShare';
import getText from '../../../i18n/getText';
import urlToLink from '../../../helpers/urlToLink';

function renderDisplayHTML (displayHTML) {
  return html`<div class='buv-c-fullscreen-certificate__certificate  qa-fullscreen-certificate'>${unsafeHTML(urlToLink(displayHTML))}</div>`;
}

export default function FullScreenCertificate ({
  hasCertificateDefinition,
  recipientName,
  displayHTML,
  onClose
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  return html`
    ${CSS}
    <section class='buv-c-fullscreen-certificate'>
      <header class='buv-c-fullscreen-certificate-header'>
        <div class='buv-c-fullscreen-certificate-header__content'>
          <h1 class='buv-c-fullscreen-certificate__title'>${recipientName}</h1>
          ${CloseButton({ onClick: onClose, className: 'buv-c-fullscreen-certificate__close' })}
        </div>  
      </header>
      <section class='buv-c-fullscreen-certificate__content'>
        <div class='buv-c-fullscreen-certificate__details'>
          <buv-final-verification-step class='buv-c-fullscreen-certificate__verification-status' isVisible hideLink standalone>
            <buv-verify-button type='link'>${getText('text.verifyAgain')}</buv-verify-button>
          </buv-final-verification-step>
          <buv-certificate-details direction='column' hideRecipientName></buv-certificate-details>
          <buv-metadata class='buv-c-fullscreen-certificate__details-item  buv-c-fullscreen-certificate__separator' display='plaintext'></buv-metadata>
          <buv-download-link class='buv-c-fullscreen-certificate__details-item' display='plaintext'></buv-download-link>
          <buv-social-share class='buv-c-fullscreen-certificate__details-item' display='plaintext'></buv-social-share>
          ${BlockcertsLogo({ className: 'buv-c-fullscreen-certificate__separator', showMotto: true, logoSize: 'medium' })}
          <buv-verify-other-certificate class='buv-c-fullscreen-certificate__verify-other'></buv-verify-other-certificate>
        </div>
        <div class='buv-c-fullscreen-certificate__certificate'>
          ${displayHTML ? renderDisplayHTML(displayHTML) : html`<buv-full-certificate-v1></buv-full-certificate-v1>`}
        </div>
      </section>
    </section>
  `;
}
