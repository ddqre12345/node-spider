'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const SiteSchema = new Schema({
  mum: String,
  title: String,
  href: String,
  author: String
});

SiteSchema.index({id: 1});

//利用SiteSchema实例,发布一个Site的model并且导出
const Site = mongoose.model("Site",SiteSchema);
export default Site;