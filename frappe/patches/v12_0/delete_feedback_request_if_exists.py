
import frappe

def execute():
    frappe.delete_doc_if_exists("DocType", "Feedback Request")
