class Api::UsersController < ApplicationController
   def create
    @user = User.new(u_param)

    if @user.save
        login(@user)
        render 'api/users/show'
    else
        render json: @user.errors.full_messages, status: 422
    end
end


private

    def u_param
        params.require(:user).permit(:name, :password, :email)
    end

end