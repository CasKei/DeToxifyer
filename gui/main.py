import customtkinter

class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("400x150")

        self.grid_rowconfigure(0, weight=1)  # configure grid system
        self.grid_columnconfigure(0, weight=1)

        self.textbox = customtkinter.CTkTextbox(master=self, width=400, corner_radius=0)
        self.textbox.grid(row=0, column=0, sticky="nsew")
        self.textbox.insert("0.0", "Some example text!\n" * 10)
        self.button = customtkinter.CTkButton(self, text="my button", command=self.button_callbck)
        # self.button.pack(padx=20, pady=20)



    def button_callbck(self):
        print("button clicked")

app = App()
app.mainloop()