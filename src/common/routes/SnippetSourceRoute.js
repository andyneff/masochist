import React from 'react';
import {graphql} from 'react-relay';

import Snippet from '../../client/components/Snippet';
import {MarkupFormatType} from '../../server/schema/types/MarkupType';
import NotFoundError from '../NotFoundError';
import RenderTextError from '../RenderTextError';
import buildRoute from '../buildRoute';

/**
 * A mapping from 'html' to "HTML" etc.
 */
const FORMAT_TO_MARKUP_TYPE = new Map(
  MarkupFormatType.getValues().map(({name, value}) => [value, name]),
);

/**
 * HTML renders as text/html; everything else as text/plain.
 */
const FORMAT_TO_MIME_TYPE = {
  html: 'text/html',
};

export default buildRoute(
  graphql`
    query SnippetSourceRouteQuery(
      $format: MARKUP_FORMAT_TYPE
      $id: ID!
    ) {
      node(id: $id) {
        ... on Snippet {
          source(format: $format)
        }
      }
    }
  `,
  ({format, id}) => {
    format = FORMAT_TO_MARKUP_TYPE.get(format.toLowerCase());
    if (format !== 'TXT') {
      return {format, id};
    } else {
      return {
        format: null,
        id,
      };
    }
  },
  ({node}, {format, id}) => {
    if (node && node.source !== null) {
      throw new RenderTextError(
        node.source,
        FORMAT_TO_MIME_TYPE[format.toLowerCase()] || 'text/plain',
      );
    }
    throw new NotFoundError(
      `Snippet "${id}" source not found for format ${format}`,
    );
  },
);
