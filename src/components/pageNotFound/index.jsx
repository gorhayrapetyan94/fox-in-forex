import React from 'react';
import './index.css';
import './media.css';
import { FormattedMessage } from 'react-intl';

class PageNotFound extends React.Component {
    render() {
        return (
            <>
                <div className="main_content text_center">
                    <div className="error_code">
                        404
                    </div>
                    <div className="page_not_found font_bold">
                        <FormattedMessage id="pageNotFoundTitle" defaultMessage="pageNotFoundTitle" />
                    </div>
                    <div className="error_text inline_block">
                        <FormattedMessage id="pageNotFoundText" defaultMessage="pageNotFoundText" />
                    </div>
                </div>
            </>
        )
    }
}

export default PageNotFound;