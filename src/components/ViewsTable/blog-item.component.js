import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import moment from 'moment';
import { useState } from 'react';

import BlogViewsDetails from '../BlogViewsDetails/blog-views-details.component';
import WeekViews from './week-views.component';

const BlogItem = ({ row, ...otherProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TableCell>{moment(row.published).format('MMM DD, YYYY')}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>
        <WeekViews {...otherProps} />
      </TableCell>
      <TableCell>{row.totalViews}</TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          endIcon={<OpenInNewIcon />}
          onClick={() => setIsModalOpen(true)}
        >
          Details
        </Button>
      </TableCell>
      <BlogViewsDetails
        open={isModalOpen}
        handleClose={handleModalClose}
        data={row}
      />
    </>
  );
};

export default BlogItem;
