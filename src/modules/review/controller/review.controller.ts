import { Controller } from '@nestjs/common';
import { ReviewService } from '../service';

@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
}
