const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')


//@desc add new contact
//@method post
//@req.body
//@path api/contacts 
router.post('/', async(req,res)=> {
    try {
        const {name,email,phone} = req.body
        if(!name || !email){
            return res.status(400).send("name and email are required")
        }
        const contactt = await Contact.findOne({email})
        if(contactt){
            return res.status(400).send("contact already exist")
        }
        const contact = new Contact({name,email,phone})
        await contact.save()
        res.status(200).send({msg:"contact saved", contact})
    } catch (error) {
        res.status(500).send("can't add contact")
    }
})

//get all contacts
//@method get
router.get('/', async(req,res) =>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({msg:"contacts", contacts})
    } catch (error) {
        res.status(500).send("cant get contacts")
    }
})
 
//@desc update
//@method update
//@req.body
//@req.params

router.put('/:Id',async(req,res)=>{
    try {
        const {Id} = req.params
        const newContact = await Contact.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        res.status(200).send({msg:"contact succesfuly updated", newContact})
    } catch (error) {
        res.status(500).send("impossible to update")
    }
})

//@desc delete
//@method 
//@req.parpams
router.delete('/:Id',async(req,res) => {
    try {
        const {Id} = req.params
        await Contact.findOneAndDelete({_id:Id})
        res.status(200).send({msg:"contact was deleted"})
    } catch (error) {
        res.status(500).send("cant delete contact")
    }
})

module.exports = router