import { model, Model, models, Schema } from 'mongoose';
import { Prompt } from '@types';

const PromptSchema = new Schema<Prompt>({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.']
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.']
  }
});

const Prompt = (models.Prompt as Model<Prompt>) || model<Prompt>('Prompt', PromptSchema);

export default Prompt;
